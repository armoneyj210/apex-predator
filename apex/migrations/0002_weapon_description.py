# Generated by Django 3.0.3 on 2020-02-08 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apex', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='weapon',
            name='description',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]
