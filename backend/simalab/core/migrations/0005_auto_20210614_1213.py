# Generated by Django 3.2.4 on 2021-06-14 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_alatlab_subtitle'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='alatlab',
            name='subtitle',
        ),
        migrations.AddField(
            model_name='alatlab',
            name='SubInv',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
