import Station from "../types/station";

const Stations: Station[] = [
    {
        name: 'WRTC',
        fm: '89.3',
        location: 'Hartford, CT',
        audioUrl: 'http://live.adsciconsolidated.com/wrtchigh.mp3',
        url: 'https://wrtcfm.com/',
        donationUrl: 'https://wrtcfm.com/donate'
    },
    {
        name: 'WRUV',
        fm: '90.1',
        location: 'Burlington, VT',
        audioUrl: 'http://icecast.uvm.edu:8005/wruv_fm_128',
        url: 'http://wruv.org/'
      },
    {
        name: 'KEXP',
        fm: '90.3',
        location: 'Seattle, WA',
        audioUrl: 'https://kexp-mp3-128.streamguys1.com/kexp128.mp3',
        url: 'https://www.kexp.org/',
        donationUrl: 'https://www.kexp.org/donate/'
    },
    {
        name: 'KTRU',
        fm: '96.1',
        location: 'Houston, TX',
        audioUrl: 'https://stream.rcs.revma.com/uevdenv2ss8uv',
        url: 'https://ktru.org/',
        donationUrl: 'https://riceconnect.rice.edu/donation/support-student-media'
    }
]

export default Stations;