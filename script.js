
    let sec = 0;
    let min = 0;
    let hr = 0;
    let timer = false;

    function start() {
      timer = true;
      run();
    }

    function stop() {
      timer = false;
    }

    function reset() {
      timer = false;
      sec = 0;
      min = 0;
      hr = 0;
      document.getElementById("display").innerHTML = "00:00:00";
    }

    function run() {
      if (timer) {
        sec++;
        if (sec == 60) {
          sec = 0;
          min++;
        }
        if (min == 60) {
          min = 0;
          hr++;
        }

        let h = hr < 10 ? "0" + hr : hr;
        let m = min < 10 ? "0" + min : min;
        let s = sec < 10 ? "0" + sec : sec;

        document.getElementById("display").innerHTML = h + ":" + m + ":" + s;
        setTimeout(run, 1000);
      }
    }