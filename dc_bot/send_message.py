import os
import sys
# Append parent directory to import path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import discord
from discord.ext import commands

# import yaml
import random
from datetime import datetime as dt
from discord.ext import tasks as discordTasks

from crawler.rss.twitter_rss import TwitterRSSReader

intents = discord.Intents.default()
intents.members = True
intents.message_content = True

client = discord.Client(intents=intents)
# set command prefix
# client = commands.Bot(command_prefix="dmb ")

BOT_TOKEN = "MTAzMzUxNTIyMDE5MjIwNjk1OA.Gt4N3w.2Xz3IlBwqm0-eKg6UWsJ-3wunY1XT2Zbm_1d74"


@client.event
async def on_ready():
    print("Start testing bot ... ")
    messageDaily.start()


@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith("hello"):
        await message.channel.send("Hola! %s" % message.channel.id)


async def send_msg(msg=None, embeds=None):
    for channel in client.get_all_channels():
        if channel.name == "测试乐园":
            await channel.send(content=msg, embeds=embeds)



# loop for sending message
@discordTasks.loop(minutes=1)
async def messageDaily():
    print(">>>>>>>>>  Updating data source  >>>>>>>>> ")

    embeds = TwitterRSSReader.fetch_user_tweets("bitouq")
    
    await send_msg(embeds=embeds)


client.run(BOT_TOKEN)
