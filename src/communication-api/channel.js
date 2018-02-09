import Rx from 'rxjs/Rx';

export default class Channel {
    constructor() {
        this.subjectMap = {};
        this.subjectResolveMap = {};
    }

    createSubject(subjectName, options) {
        if (this.notHasSubject(subjectName)) {
            this.subjectMap[subjectName] = new Rx.ReplaySubject(1);
        }

        if (this.isSubjectNotResolved(subjectName)) {
            this.subjectResolveMap[subjectName](this.subjectMap[subjectName]);
            delete this.subjectResolveMap[subjectName];
        }

        return this.subjectMap[subjectName];
    }

    getSubject(subjectName) {
        if (this.notHasSubject(subjectName)) {
            return new Promise((resolve) => this.subjectResolveMap[subjectName] = resolve);
        } else {
            return Promise.resolve(this.subjectMap[subjectName]);
        }
    }

    notHasSubject(subjectName) {
        return !this.subjectMap[subjectName];
    }

    isSubjectNotResolved(subjectName) {
        return !!this.subjectResolveMap[subjectName];
    }


}