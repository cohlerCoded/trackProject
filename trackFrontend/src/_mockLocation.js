import * as Location from 'expo-location'

const tenMetersWithDegrees = 0.0001
let currLong = 0
let currLat = 0

const getCurrLoc = async () => {
  try {
    let location = await Location.getCurrentPositionAsync({})
    console.log(location)
    currLong = location.coords.longitude
    currLat = location.coords.latitude
    console.log(currLat)
  } catch (error) {
    console.log(error)
  }
}
getCurrLoc()

const getLocation = (increment) => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: currLong + increment * tenMetersWithDegrees,
      latitude: currLat + increment * tenMetersWithDegrees,
    },
  }
}

let counter = 0
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  })
  counter++
}, 1000)
