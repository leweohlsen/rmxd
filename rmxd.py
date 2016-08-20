import billboard
import soundcloud
from flask import Flask, render_template
from track import Track

client = soundcloud.Client(client_id='YOUR_SOUNDCLOUD_API_KEY_HERE')
app = Flask(__name__)

# RETRIEVE DATA
#==================================================
charts = billboard.ChartData('hot-100')
trackList = []
for track in charts:
    searchQuery = " %s - %s remix" % (track.artist, track.title)
    # get remixes for searchQuery > 2min from soundcloud
    remixes = client.get('/tracks', q=searchQuery, durationfrom='120000')
    trackObj = Track(track.artist, track.title, track.rank, remixes)
    trackList.append(trackObj)

# ROUTES
#==================================================
@app.route("/")
def main():
    return render_template('index.html', tracks=trackList)

if __name__ == "__main__":
    app.run()
