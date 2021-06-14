# Generated by Django 3.2.4 on 2021-06-14 05:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='alatlab',
            name='KodeBarang',
            field=models.CharField(default=0, max_length=20),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='alatlab',
            name='gambarAlat',
            field=models.FileField(null=True, upload_to='static/uploads/alat/'),
        ),
        migrations.AlterField(
            model_name='form_submisi',
            name='file1',
            field=models.FileField(null=True, upload_to='static/uploads/submisi/'),
        ),
        migrations.AlterField(
            model_name='form_submisi',
            name='file2',
            field=models.FileField(null=True, upload_to='static/uploads/submisi/'),
        ),
        migrations.AlterField(
            model_name='templateform',
            name='file',
            field=models.FileField(upload_to='static/uploads/templates/'),
        ),
    ]
