import Station from "../types/station";

const Stations: Station[] = [
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
]

export default Stations;