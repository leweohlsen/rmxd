class Track:
   'Basic class for a single track and its remixes'
   empCount = 0

   def __init__(self, artist, title, rank, remixes):
      self.artist = artist
      self.title = title
      self.rank = rank
      self.remixes = remixes
      Track.empCount += 1

   def toString(self):
      return " %s - %s" % (self.artist, self.title)
