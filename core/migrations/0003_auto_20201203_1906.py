# Generated by Django 3.1.4 on 2020-12-03 19:06

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('core', '0002_auto_20201203_1825'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='seguindo',
            unique_together={('de', 'para')},
        ),
    ]