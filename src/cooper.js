var dataSetMale = [
  {age:'13-14', excellent:'>2700', aboveAverage:'2400-2699m', average:'2200-2399m', belowAverage:'2100-2199m', poor:'<2100m'},
  {age:'15-16', excellent:'>2800m', aboveAverage:'2500-2799m', average:'2300-2499m', belowAverage:'2200-2299m', poor:'<2200m'},
  {age:'17-19', excellent:'>3000m', aboveAverage:'2700-2999m', average:'2500-2699m', belowAverage:'2300-2499m', poor:'<2300m'},
  {age:'20-29', excellent:'>2800m', aboveAverage:'2400-2799m', average:'2200-2399m', belowAverage:'1600-2199m', poor:'<1600m'},
  {age:'30-39', excellent:'>2700m', aboveAverage:'2300-2699m', average:'1900-2299m', belowAverage:'1500-1999m', poor:'<1500m'},
  {age:'40-49', excellent:'>2500m', aboveAverage:'2100-2499m', average:'1700-2099m', belowAverage:'1400-1699m', poor:'<1400m'},
  {age:'50+', excellent:'>2400m', aboveAverage:'2000-2399m', average:'1600-1999m', belowAverage:'1300-1599m', poor:'<1300m'}
];
var dataSetFemale = [
  {'13-14':{'>2000m','1900-1999m', '1600-1899m', '1500-1599m', '<1500m'},
  '15-16':{'>2100m', '2000-2099m', '1700-1999m', '1600-1699m', '<1600m'},
  '17-19':{'>2300m', '2100-2299m', '1800-2099m', '1700-1799m', '<1700m'},
  '20-29':{'>2700m', '2200-2699m', '1800-2199m', '1500-1799m', '<1500m'},
  '30-39':{'>2500m', '2000-2499m', '1700-1999m', '1400-1699m', '<1400m'},
  '40-49':{'>2300m','1900-2299m', '1500-1899m', '1200-1499m', '<1200m'},
  '50+':{'>2200m', '1700-2199m', '1400-1699m', '1100-1399m', '<1100m'}
}];

function age() {
  var age_selected = function(obj) {
    if(age_selected == 13 || 14) {
      return '13-14';
    } else if(age_selected == 15 || 16) {
      return '15-16';
    } else if(age_selected == 17 || 18 || 19) {
      return '17-19';
    } else if(age_selected >= 20 && age_selected <= 29) {
      return '20-29';
    } else if(age_selected >= 30 && age_selected <= 39) {
      return '30-39';
    } else if(age_selected >= 40 && age_selected <= 49) {
      return '40-49';
    } else if(age_selected >= 50) {
      return '50+';
    } else {
      return 'Not a valid number';
    }
  };
}

function CooperChallenge(distance) {
  if(gender == 'female') {
    dataSetFemale.find(age, value);
    for(i = 0; i < dataSetFemale.length; i++)
    return 'Your index it ' + setMessage;
  } else if(gender == 'male') {
    dataSetMale.find(value, distance);
    for(i = 0; i < dataSetMale.length; i++)
    return 'Your index it ' + setMessage;
  } else {
    return 'You have to select a gender';
  }
}
function setMessage(obj) {
  obj.dataSetFemale = function(age, distance) {
  if(age == '13-14' && distance == 0) {
    return'Excellent';
  } else if(age == '15-16' && distance == 0) {
    return 'Above Average';
  } else if(age == '17-19' && distance == 0) {
    return 'Above Average';
  } else if(age == '20-29' && distance == 0) {
    return 'Above Average';
  } else if(age == '30-39' && distance == 0) {
    return 'Above Average';
  }
};
