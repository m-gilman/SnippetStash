// The jQuery stop() method is used to stop an animation or effect before it is finished.
// The stop() method works for all jQuery effect functions, including sliding, fading and custom animations.

$(selector).stop(stopAll,goToEnd);

// Example
$("#stop").click(function(){
    $("#panel").stop();
});