from core.models import User
from django.test.client import Client
from django.test.testcases import TestCase
from core.tests import fixtures
import json


class TestTweetsApi(TestCase):
    @classmethod
    def setUpTestData(cls):
        fixtures.usuarios_busercamp()

    def test_tweets_api(self):
        daniel, bia, jp, anon = Client(), Client(), Client(), Client()
        daniel.force_login(User.objects.get(username='@daniel.simoes.elias'))
        bia.force_login(User.objects.get(username='@test1'))
        jp.force_login(User.objects.get(username='@test2'))
        self._follow(daniel, '@test2')
        self._follow(bia, '@test2')
        self._follow(bia, '@daniel.simoes.elias')
        self._follow(daniel, '@test1')
        self._unfollow(daniel, '@test1')
        self._tweet(jp, 'nada')
        self._tweet(daniel, 'hello')
        self._tweet(daniel, 'world')
        self._tweet(bia, 'quero')
        self._tweet(bia, 'barrinha')
        self._assert_tweets_home(jp, [])
        self._assert_tweets_home(daniel, ["nada"])
        self._assert_tweets_home(bia, ["world", "hello", "nada"])
        self._assert_tweets_home(anon, ["barrinha", "quero", "world", "hello", "nada"])
        self._assert_tweets_user(anon, "@test1", ["barrinha", "quero"])
        self._assert_tweets_user(daniel, "@test1", ["barrinha", "quero"])


    def _follow(self, client, username):
        r = client.post('/api/follow', {"username": username})
        self.assertEqual(200, r.status_code)
        data = json.loads(r.content.decode('utf-8'))
        self.assertIsNotNone(data)

    def _unfollow(self, client, username):
        r = client.post('/api/unfollow', {"username": username})
        self.assertEqual(200, r.status_code)
        data = json.loads(r.content.decode('utf-8'))
        self.assertIsNotNone(data)

    def _tweet(self, client, text):
        r = client.post('/api/tweet', {"text": text})
        self.assertEqual(200, r.status_code)
        tweet = json.loads(r.content.decode('utf-8'))
        self.assertIsNotNone(tweet)
        self.assertIsNotNone(tweet['id'])
        self.assertEquals(text, tweet['text'])

    def _assert_tweets_home(self, client, expectedtweets):
        r = client.get('/api/list_items')
        self.assertEqual(200, r.status_code)
        tweets = json.loads(r.content.decode('utf-8'))
        actualtweet_texts = [t['text'] for t in tweets]
        self.assertEquals(actualtweet_texts, expectedtweets)

    def _assert_tweets_user(self, client, username, expectedtweets):
        r2= client.get('/api/list_items', {'username': username})
        r1 = client.get('/api/get_user_details', {'username': username})
        self.assertEqual(200, r1.status_code)
        self.assertEqual(200, r2.status_code)
        userdetails = json.loads(r1.content.decode('utf-8'))
        tweets = json.loads(r2.content.decode('utf-8'))
        actualtweet_texts = [t['text'] for t in tweets]
        self.assertEquals(actualtweet_texts, expectedtweets)
        for k in ['username', 'avatar', 'last_tweet', 'ifollow']:
            self.assertIsNotNone(userdetails[k])
