// data
let videoPlaylist1 = {
  title: 'Education Videos',
  videoClips: [
    {
      title:
        'JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator',
      authorNAme: 'It-Kamasutra',
      startTime: 'Live Stream',
      fileUrl: '01.mp4',
    },
    {
      title:
        'JavaScript - The Way of the Samurai, installing VS code, code editor',
      authorNAme: 'It-Kamasutra',
      startTime: '1 week ago',
      fileUrl: '02.mp4',
    },
    {
      title:
        'Reboot - express + typescript + nodemon / Back-end - The Samurai Way',
      authorNAme: 'It-Kamasutra',
      startTime: '2 weeks ago',
      fileUrl: '03.mp4',
    },
  ],
}
let videoPlaylist2 = {
  title: 'Online training sports',
  videoClips: [
    {
      title:
        '20 MIN FULL BODY WORKOUT - Beginner Version // No Equipment I Pamela Reif',
      authorNAme: 'Pamela Reif',
      startTime: '12 hours ago',
      fileUrl: '04.mp4',
    },
    {
      title: 'Sports training online — filming and editing - Stretching Yoga',
      authorNAme: 'Seva Prihodko',
      startTime: '1 week ago',
      fileUrl: '05.mp4',
    },
    {
      title: 'PERFECT 20 MIN FULL BODY WORKOUT FOR BEGINNERS (No Equipment)',
      authorNAme: 'BullyJuice',
      startTime: '2 weeks ago',
      fileUrl: '06.mp4',
    },
  ],
}

// render
function renderVideoPlaylistHeaderElement(videoPlaylist) {
  let videoPlaylistTitleElement = document.createElement('h2')
  videoPlaylistTitleElement.append(videoPlaylist.title)
  document.body.append(videoPlaylistTitleElement)
}

function renderVideoClip(clip) {
  let videoClipElement = document.createElement('div')

  let videoPlayerElement = document.createElement('video')
  videoPlayerElement.src = clip.fileUrl

  videoPlayerElement.controls = true
  videoClipElement.append(videoPlayerElement)

  let videoClipTitleElement = document.createElement('h3')
  videoClipTitleElement.append(clip.title)
  videoClipElement.append(videoClipTitleElement)

  let authorNAmeElement = document.createElement('span')
  authorNAmeElement.append(clip.authorNAme)
  videoClipElement.append(authorNAmeElement)

  let brElement = document.createElement('br')
  videoClipElement.append(brElement)

  let startTimeElement = document.createElement('span')
  startTimeElement.append(clip.startTime)
  videoClipElement.append(startTimeElement)

  document.body.append(videoClipElement)
}

function renderVideoPlaylist(videoPlaylist) {
  renderVideoPlaylistHeaderElement(videoPlaylist)
  renderVideoClip(videoPlaylist.videoClips[0])
  // renderVideoClip(videoPlaylist.videoClips[1])
  renderVideoClip(videoPlaylist.videoClips[2])
}

renderVideoPlaylist(videoPlaylist1)
//renderVideoPlaylist(videoPlaylist2)
