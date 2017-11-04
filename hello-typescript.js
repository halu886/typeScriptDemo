/**
 * @author:halu
 * @Date:2017/11/4
 */
var BirdWhisperper = /** @class */ (function () {
    function BirdWhisperper(message) {
        this.chirping = message;
    }
    BirdWhisperper.prototype.chirp = function () {
        return "Ah~oh~" + this.chirping;
    };
    return BirdWhisperper;
}());
var birdWhisperper = new BirdWhisperper("coo-coo--coo...");
document.body.innerHTML = birdWhisperper.chirp();
//# sourceMappingURL=hello-typescript.js.map