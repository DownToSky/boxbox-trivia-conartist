import time
from twitchobserver import Observer

oauth = "oauth:bb9fws90lx34yueq0fdq66za462iwt"
username = "downtosky"
chnnl = "boxbox"

"""
Voice Actors
Skills
Designers
Lore
Quotes
Titles
LCS
Voice Actors

"""

with Observer(username, oauth) as observer:
    observer.join_channel(chnnl)

    while True:
        try:
            for event in observer.get_events():
                if event.type == 'TWITCHCHATMESSAGE':
                    if event.nickname == "boxboxbot":
                        with open("trivia.txt","a") as f:
                            f.write(event.message.encode("ascii",'ignore').decode()+"\r\n")

        except KeyboardInterrupt:
            observer.leave_channel('channel')
            break