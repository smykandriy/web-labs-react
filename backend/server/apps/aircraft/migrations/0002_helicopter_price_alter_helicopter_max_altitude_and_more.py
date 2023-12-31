# Generated by Django 4.2.2 on 2023-10-27 01:03

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("aircraft", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="helicopter",
            name="price",
            field=models.PositiveIntegerField(default=10),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="helicopter",
            name="max_altitude",
            field=models.PositiveIntegerField(),
        ),
        migrations.AlterField(
            model_name="helicopter",
            name="take_off_weight",
            field=models.PositiveIntegerField(),
        ),
        migrations.AlterField(
            model_name="helicopter",
            name="weight",
            field=models.PositiveIntegerField(),
        ),
    ]
