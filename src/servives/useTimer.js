import { ref } from 'vue';

export class useTimer {
    seconds = ref(0)
    minutes = ref(0)
    hour = ref(0)

    timestamps = []
    inexTargetTimestamps = 0
    taimerInterval = null

    constructor(timestamps) {
        this.timestamps = timestamps

        const index = this.timestamps.findIndex(element => Number(element.split(":")[0]) > 10);
        this.inexTargetTimestamps = index

        if (index) this.nextTaime()
    }

    updateTimer(targetTimestamp) {
        const currentTimestamp = Date.now();

        let differenceInMilliseconds = targetTimestamp - currentTimestamp;

        if (differenceInMilliseconds < 0) {
            differenceInMilliseconds = 0;

            this.inexTargetTimestamps++

            this.nextTaime()
        }

        this.hour.value = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));

        differenceInMilliseconds %= 1000 * 60 * 60;

        this.minutes.value = Math.floor(differenceInMilliseconds / (1000 * 60));
        this.seconds.value = Math.floor((differenceInMilliseconds % (1000 * 60)) / 1000);
    }

    nextTaime() {
        const targetTime = this.timestamps[this.inexTargetTimestamps]

        if (!targetTime) return

        const [TargetHour, TargetMinuts] = targetTime.split(':')
        const targetTimestamp = new Date().setHours(TargetHour, TargetMinuts);

        clearInterval(this.taimerInterval)
        this.taimerInterval = setInterval(() => this.updateTimer(targetTimestamp), 1000);
    }
}