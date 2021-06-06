import PouchDB from 'pouchdb-react-native';

export const emotionsDB = new PouchDB('emotionsDB')
export const activitiesDB = new PouchDB('activity')
export const companionsDB = new PouchDB('companion')
export const locationsDB = new PouchDB('location')

export const userCaptureDB = new PouchDB('userCapture')
export const dailyCapture = new PouchDB('dailyCapture')
export const userDB = new PouchDB('user')

