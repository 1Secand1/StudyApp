import { ref } from 'vue';

export class useTimer {
    seconds = ref(0)
    minutes = ref(0)
    hour = ref(0)
    message = ref("")

    timestamps = []
    inexTargetTimestamps = 0
    taimerInterval = null


    constructor(timestamps) {
        this.timestamps = timestamps

        const actualElementIndex = this.findActualElementIndex(this.timestamps)

        if (actualElementIndex != -1) {
            this.inexTargetTimestamps = actualElementIndex
            this.nextTaime()
        }

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
        const targetTime = this.timestamps[this.inexTargetTimestamps].time

        if (!targetTime) return

        this.message.value = this.timestamps[this.inexTargetTimestamps].message

        const [TargetHour, TargetMinuts] = targetTime.split(':')
        const targetTimestamp = new Date().setHours(TargetHour, TargetMinuts);

        clearInterval(this.taimerInterval)
        this.taimerInterval = setInterval(() => this.updateTimer(targetTimestamp), 1000);
    }

    findActualElementIndex(arr) {
        const currentDate = new Date()
        const currentHour = currentDate.getHours()
        const currentMinutes = currentDate.getMinutes()

        return arr.findIndex(({ time }) => {
            const [targetHour, targetMinutes] = time.split(":").map(Number);
            return (
                targetHour > currentHour ||
                (targetHour === currentHour && targetMinutes > currentMinutes)
            );
        });
    }
}