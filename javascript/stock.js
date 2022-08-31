function populate(s1,s2)
{
            var s1 = document.getElementById(s1);
            var s2 = document.getElementById(s2);

            s2.innerHTML = "";

            if(s1.value == "all"){
              var optionArray = ['patna|Patna', 'nalanda|Nalanda', 'aurangabad|Aurangabad', 'buxar|Buxar', 'vaishali|Vaishali', 'champaran|Champaran','amabala|Ambala', 'gurgaon|Gurgaon', 'faridabad|Faridabad', 'kurukshetra|Kurukshetra', 'karnal|Karnal', 'panipat|Panipat', 'east delhi|East Delhi', 'central delhi|Central Delhi', 'new delhi|New Delhi', 'north delhi| North Delhi', 'shahadra|Shahadra', 'south delhi|South Delhi', 'amritsar|Amritsar', 'firozpur|Firozpur', 'ludhiana|Ludhiana', 'patiala|Patiala', 'bathinda|Bathinda', 'mohali|Mohali', 'alwar|Alwar', 'ajmer|Ajmer', 'bikaner|Bikaner', 'jaipur|Jaipur', 'jodhpur|Jodhpur', 'udaipur|Udaipur', 'almora|Almora', 'bageshwar|Bageshwar', 'dehradun|Dehradun', 'haridwar|Haridwar', 'nainital|Nainital', 'rudraprayag|Rudraprayag', 'agra|Agra', 'bareilly|Bareilly', 'kanpur|Kanpur', 'lucknow|Lucknow', 'moradabad|Moradabad', 'prayagraj|Prayagraj'];
            }
            else if(s1.value=="bihar"){
              var optionArray = ['patna|Patna', 'nalanda|Nalanda', 'aurangabad|Aurangabad', 'buxar|Buxar', 'vaishali|Vaishali', 'champaran|Champaran'];
            }
            else if(s1.value == "haryana"){
                var optionArray = ['amabala|Ambala', 'gurgaon|Gurgaon', 'faridabad|Faridabad', 'kurukshetra|Kurukshetra', 'karnal|Karnal', 'panipat|Panipat'];
            }
            else if(s1.value == "delhi"){
                var optionArray = ['east delhi|East Delhi', 'central delhi|Central Delhi', 'new delhi|New Delhi', 'north delhi| North Delhi', 'shahadra|Shahadra', 'south delhi|South Delhi'];
            }
            else if(s1.value == "punjab"){
                var optionArray = ['amritsar|Amritsar', 'firozpur|Firozpur', 'ludhiana|Ludhiana', 'patiala|Patiala', 'bathinda|Bathinda', 'mohali|Mohali'];
            }
            else if(s1.value == "rajasthan"){
                var optionArray = ['alwar|Alwar', 'ajmer|Ajmer', 'bikaner|Bikaner', 'jaipur|Jaipur', 'jodhpur|Jodhpur', 'udaipur|Udaipur'];
            }
            else if(s1.value == "uttarakhand"){
                var optionArray = ['almora|Almora', 'bageshwar|Bageshwar', 'dehradun|Dehradun', 'haridwar|Haridwar', 'nainital|Nainital', 'rudraprayag|Rudraprayag'];
            }
            else if(s1.value == "uttar pradesh"){
                var optionArray = ['agra|Agra', 'bareilly|Bareilly', 'kanpur|Kanpur', 'lucknow|Lucknow', 'moradabad|Moradabad', 'prayagraj|Prayagraj'];
            }

            for(var option in optionArray){
              var pair = optionArray[option].split("|");
              var newoption = document.createElement("option");

              newoption.value = pair[0];
              newoption.innerHTML=pair[1];
              s2.options.add(newoption);
            }
}