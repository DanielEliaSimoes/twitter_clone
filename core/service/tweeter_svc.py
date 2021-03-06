from core.models import Seguindo, Tweet, User

def follow(user, username):
    userpara = User.objects.get(username=username)
    if Seguindo.objects.filter(de=user, para=userpara).count() == 0:
        Seguindo.objects.create(de=user, para=userpara)


def unfollow(user, username):
    userpara = User.objects.get(username=username)
    Seguindo.objects.filter(de=user, para=userpara).delete()


def tweet(user, text):
    Tweet.objects.create(user=user, text=text)


def list_items(loggeduser, username):
    if username:
        tweets = Tweet.objects.filter(user__username=username).order_by('-created_at')
    else:
        if loggeduser:
            tweets = Tweet.objects.filter(user__in=User.objects.filter(seguindo_para__de=loggeduser)).order_by('-created_at')
        else:
            tweets = Tweet.objects.all().order_by('-created_at')
    return [t.to_dict_json() for t in tweets]
