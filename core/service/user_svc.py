from core.models import User, Tweet, Seguindo


def get_details(loggeduser, username):
    user = User.objects.get(username=username)
    q = Tweet.objects.filter(user=user).order_by('-created_at')
    tweet = ''
    if q.count() > 0:
        tweet = q[0].text
    ifollow = False
    if loggeduser:
        ifollow = Seguindo.objects.filter(de=loggeduser, para=user).count() > 0   #por algum motivo não funciona
    return {
        'username': user.username,
        'avatar': 'https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg',
        'last_tweet': tweet,
        'ifollow': ifollow
    }
