# This example requires the 'message_content' privileged intent to function.
# guild id 1028925472739954738
from mongoengine import connect
from discord.ui import TextInput, Modal
from discord.ext import commands
import discord
import datetime
from twitter_source import TwitterSource

twitter_author_list = []


class DropdownOptionEnum:
    TWITTER_ADD = "添加Twitter信源"
    TWITTER_REMOVE = "删除Twitter信源"
    TWITTER_SHOW = "展示现有Twitter信源"


class Bot(commands.Bot):
    def __init__(self):
        intents = discord.Intents.default()
        intents.message_content = True
        super().__init__(
            command_prefix=commands.when_mentioned_or("$"), intents=intents
        )
        connect(db="twitter", host="localhost", port=27017)

    async def on_ready(self):
        print(f"Logged in as {self.user} (ID: {self.user.id})")


# Define a simple View that gives us a counter button
class InputModal(discord.ui.Modal, title="添加博主"):
    text = discord.ui.TextInput(
        label="请添加twitter博主的用户名",
    )

    async def on_submit(self, interaction: discord.Interaction) -> None:
        embed = discord.Embed(
            description="💥 成功添加博主 💥"
            + "\n ---------------- \n"
            + "     "
            + self.text.value
            + "\n ----------------",
            timestamp=datetime.datetime.now(),
            color=discord.Colour.brand_green(),
        )
        twitter_author_list.append(self.text.value)
        embed.set_author(name=interaction.user, icon_url=interaction.user.avatar)
        TwitterSource.add_source(self.text.value)
        await interaction.response.send_message(embed=embed)

# Define a simple View that gives us a counter button
class RemoveUserModal(discord.ui.Modal, title="移除博主"):
    text = discord.ui.TextInput(
        label="移除twitter博主的用户名",
    )

    async def on_submit(self, interaction: discord.Interaction) -> None:
        embed = discord.Embed(
            description="💥 成功移除博主 💥"
            + "\n ---------------- \n"
            + "     "
            + self.text.value
            + "\n ----------------",
            timestamp=datetime.datetime.now(),
            color=discord.Colour.brand_red(),
        )
        twitter_author_list.append(self.text.value)
        embed.set_author(name=interaction.user, icon_url=interaction.user.avatar)
        TwitterSource.delete_twitter_source(self.text.value)
        await interaction.response.send_message(embed=embed)


class Dropdown(discord.ui.Select):
    def __init__(self):

        # Set the options that will be presented inside the dropdown
        options = [
            discord.SelectOption(
                label=DropdownOptionEnum.TWITTER_ADD,
                description="Add twitter author",
                emoji="👻",
            ),
            discord.SelectOption(
                label=DropdownOptionEnum.TWITTER_REMOVE,
                description="Remove twitter author",
                emoji="🤖",
            ),
            discord.SelectOption(
                label=DropdownOptionEnum.TWITTER_SHOW,
                description="Check all the twitter authors",
                emoji="👺",
            ),
        ]

        # The placeholder is what will be shown when no option is chosen
        # The min and max values indicate we can only pick one of the three options
        # The options parameter defines the dropdown options. We defined this above
        super().__init__(
            placeholder="What you want human",
            min_values=1,
            max_values=1,
            options=options,
        )

    async def callback(self, interaction: discord.Interaction):
        user = interaction.user
        guild = interaction.guild

        if self.values[0] == DropdownOptionEnum.TWITTER_ADD:
            await interaction.response.send_modal(InputModal())
        if self.values[0] == DropdownOptionEnum.TWITTER_REMOVE:
            await interaction.response.send_modal(RemoveUserModal())
        if self.values[0] == DropdownOptionEnum.TWITTER_SHOW:
            desc = "🐦 现有所有推特信源为 🐦"
            sources = TwitterSource.get_all_sources()
            for author in sources:
                desc += "\n ------------- \n" + "  " + author
            desc += "\n -------------"
            embed = discord.Embed(
                description=desc,
                timestamp=datetime.datetime.now(),
                color=discord.Colour.dark_red(),
            )
            await interaction.response.send_message(embed=embed)


class DropdownView(discord.ui.View):
    def __init__(self):
        super().__init__()

        # Adds the dropdown to our view object.
        self.add_item(Dropdown())


bot = Bot()


@bot.command()
async def jesus(ctx: commands.Context):
    if ctx.channel.id == 1028925472739954738:
        await ctx.send("Welcome human", view=DropdownView())


bot.run("MTAzMzUxNTIyMDE5MjIwNjk1OA.Gt4N3w.2Xz3IlBwqm0-eKg6UWsJ-3wunY1XT2Zbm_1d74")
