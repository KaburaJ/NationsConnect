import React from 'react';

// const borderCountries = () => {
//     borderCountry = country.borders.join(" ");
// }

function Modal({ closeModal, country }) {

    const nativeNameChecker = (nativeName) =>{
        for (const name in nativeName){
            if (nativeName.hasOwnProperty(name)){
                return nativeName[name].common;
            }
        }
        return '';
    }

    let native = nativeNameChecker(country.name.nativeName);

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={closeModal}>&times;</span>
                <div id="country-details">
                    <img src={country.flags.png} alt={country.name} />
                    <div className='country-name'>
                        {country.name.common}
                    </div>
                    <div className="callingCodes">
                        <span className="callingCodes-label">Calling Codes:</span>{" "}
                        <span className="callingCodes-value">{country.idd.root}{country.idd.suffixes}</span>
                    </div>

                    <div className='area'>
                        <span className="area-label">Area:</span>{" "}
                        <span className="area-value">{country.area.toLocaleString()}</span>
                    </div>
                    <div className='timezones'>
                        <span className="timezones-label">Timezones:</span>{" "}
                        <span className="timezones-value">{country.timezones? country.timezones.join(" "):''}</span>
                    </div>
                    <div className='nativeName'>
                        <span className="nativeName-label">Native Name:</span>{" "}
                        <span className="nativeName-value">{native}</span>
                    </div>
                    <div className='independent'>
                        <span className="independent-label">Independent:</span>{" "}
                        <span className="independent-value">{country.independent.toLocaleString()}</span>
                    </div>
                    <div className='borders'>
                        <span className="borders-label">Borders:</span>{" "}
                        <span className="borders-value">{country.borders? country.borders.join(" "):''}</span>
                    </div>
                    
                    {/* <div className='neighbours'>
                        <span className="neighbours-label">Neighboring Countries:</span>
                        {country.subregion && country.subregion.map(neighbor => (
                            <button key={neighbor} className="neighbor-button">{neighbor}</button>
                        ))}
                    </div> */}


                </div>
            </div>
        </div>
    );
}

export default Modal;


// "name": "Albania",
//     "topLevelDomain": [".al"],
//     "alpha2Code": "AL",
//     "alpha3Code": "ALB",
//     "callingCodes": ["355"],
//     "capital": "Tirana",
//     "altSpellings": ["AL", "Shqipëri", "Shqipëria", "Shqipnia"],
//     "subregion": "Southern Europe",
//     "region": "Europe",
//     "population": 2837743,
//     "latlng": [41, 20],
//     "demonym": "Albanian",
//     "area": 28748,
//     "gini": 33.2,
//     "timezones": ["UTC+01:00"],
//     "borders": ["MNE", "GRC", "MKD", "UNK"],
//     "nativeName": "Shqipëria",
//     "numericCode": "008",
//     "flags": {
//       "svg": "https://flagcdn.com/al.svg",
//       "png": "https://flagcdn.com/w320/al.png"
//     },
//     "currencies": [
//       {
//         "code": "ALL",
//         "name": "Albanian lek",
//         "symbol": "L"
//       }
//     ],
//     "languages": [
//       {
//         "iso639_1": "sq",
//         "iso639_2": "sqi",
//         "name": "Albanian",
//         "nativeName": "Shqip"
//       }
//     ],
//     "translations": {
//       "br": "Albania",
//       "pt": "Albânia",
//       "nl": "Albanië",
//       "hr": "Albanija",
//       "fa": "آلبانی",
//       "de": "Albanien",
//       "es": "Albania",
//       "fr": "Albanie",
//       "ja": "アルバニア",
//       "it": "Albania",
//       "hu": "Albánia"
//     },
//     "flag": "https://flagcdn.com/al.svg",
//     "regionalBlocs": [
//       {
//         "acronym": "CEFTA",
//         "name": "Central European Free Trade Agreement"
//       }
//     ],
//     "cioc": "ALB",
//     "independent": true
//   },