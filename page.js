var svalue 
var url 

let btn_Click = () =>{
    
    var svalue = document.getElementById(`select_Country`).value
     

            
url = "http://api.openweathermap.org/data/2.5/weather?q="+ svalue +"&units=metric&appid=c916e991cc31e02e0ab1b62115ef3e8f"
        
            
            
        let getFetchW = async(onSucess) =>{
               try {
                   if(onSucess){
                           let response = await fetch(url)
                           let data = await response.json()
                           console.log(data)
                           console.log(data.name)

                           //Checks the data with the fetch obtaining the data from the .json()
                           let countryName = data.name
                           let countryTemp = data.main.temp
                           //Round the temperature number 
                           let countryTempRoundNumber = Math.round(countryTemp)

                           //Country abbreviation in up case
                           let countryFlagUpCase = data.sys.country
                           //Country abbreviation in lower case
                           let countryFlagLowCase = countryFlagUpCase.toLowerCase()
                           
                           //Country weather type right now
                           let countryWeatherType = data.weather[`0`].main

                            if(countryWeatherType == "Clouds"){
                                countryWeatherType = "Cloudy"
                            }
                            else if(countryWeatherType == "Mist"){
                                countryWeatherType = "Foggy"
                            }
                           
                           document.getElementById("country").innerHTML = countryName
                           document.getElementById("temperature").innerHTML = countryTempRoundNumber + "°C"
                           document.getElementById("weather_Type").innerHTML = countryWeatherType
                           document.getElementById("country_Flag").src = "https://flagcdn.com/w640/"+countryFlagLowCase+".png"
                       }
                   else{
                       console.log("ERROR!")
                   }
                   
            } catch (error) {
                   console.log(error)
            }
            
            }
            
    getFetchW(true)
    

}






