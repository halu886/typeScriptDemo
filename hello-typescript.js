/**
 * @author:halu
 * @Date:2017/11/4
 */
class BirdWhisperper {
    constructor(message) {
        this.chirping = message;
    }
    chirp() {
        return "Ah~oh~" + this.chirping;
    }
}
let birdWhisperper = new BirdWhisperper("coo-coo--coo...");
document.body.innerHTML = birdWhisperper.chirp();
//# sourceMappingURL=hello-typescript.js.map