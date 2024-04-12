       function submitMsg()
        {
            alert("Thanks! Now you can get new updates regularly...")
        }

        function timer(){
            const date= new Date();
            const time= date.toLocaleTimeString();
            document.getElementById('clock').innerText= time;
        }
        setInterval(timer, 1000);
        timer();

        function timerProd1(){
            const date= new Date();
            const time= date.toLocaleTimeString();
            document.getElementById('clock1').innerText= time;
        }
        setInterval(timerProd1, 1000);
        timerProd1();

        function timerProd2(){
            const date= new Date();
            const time= date.toLocaleTimeString();
            document.getElementById('clock2').innerText= time;
        }
        setInterval(timerProd2, 1000);
        timerProd2();

        function dateDiff()
        {
            const currentDate= new Date();
            const publishDate= document.getElementById('publish-date').innerText;
            const dateDifference= parseInt(publishDate) - currentDate.getDate();
            const result= document.getElementById('date-difference');
            const day= (dateDifference > 1) ? `days are` : `day is`; 
            result.innerText= `Only ${dateDifference} ${day} remaining!` ;
            
        }
        dateDiff();

        function dateDiffProd1()
        {
            const currentDate= new Date();
            const publishDate= document.getElementById('publish-date-prod1').innerText;
            const dateDifference= parseInt(publishDate) - currentDate.getDate();
            const result= document.getElementById('date-difference-prod1');
            const day= (dateDifference > 1) ? `days are` : `day is`; 
            result.innerText= `Only ${dateDifference} ${day} remaining!` ;
            
        }
        dateDiffProd1();

        function dateDiffProd2()
        {
            const currentDate= new Date();
            const publishDate= document.getElementById('publish-date-prod2').innerText;
            const dateDifference= parseInt(publishDate) - currentDate.getDate();
            const result= document.getElementById('date-difference-prod2');
            const day= (dateDifference > 1) ? `days are` : `day is`; 
            result.innerText= `Only ${dateDifference} ${day} remaining!` ;
            
        }
        dateDiffProd2();

    