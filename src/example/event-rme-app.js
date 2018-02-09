import DocumentChannelFactory from "../communication-api/document-channel-factory";

export default class EventRmeApp {

    load() {
        let rmeLoadedSubject = new DocumentChannelFactory().getChannel('rme').createSubject('loaded');
        console.log('Rme loaded');
        rmeLoadedSubject.next('Rme loaded data');
    }
}
