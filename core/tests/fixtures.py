from core.models import User


def user_jon():
    ze = User.objects.create_user(
        username='jon',
        first_name='Jon',
        last_name='Snow',
        email='jon@example.com',
        password='snow',
    )
    return ze


def usuarios_busercamp():
    User.objects.create_user(username="@daniel.simoes.elias")
    User.objects.create_user(username="@test1")
    User.objects.create_user(username="@test2")
