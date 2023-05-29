import React, { useEffect, useState } from 'react';
import Categories from './categories';
import Modal from './modal';

const countriesUrl = 'https://restcountries.com/v3.1/all';

const Fetch = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('All');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        filterCountries();
    }, [countries, selectedRegion, searchTerm]);

    const fetchData = async () => {
        try {
            const response = await fetch(countriesUrl);
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const filterCountries = () => {
        let filtered = countries;
        if (selectedRegion !== 'All') {
            filtered = filtered.filter((country) => country.region === selectedRegion);
        }
        if (searchTerm.trim() !== '') {
            filtered = filtered.filter(
                (country) =>
                    country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    country.name.official.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredCountries(filtered);
    };

    const handleRegionChange = (value) => {
        setSelectedRegion(value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const openProductModal = (country) => {
        setSelectedCountry(country);
        setModalVisible(true);
    };

    const closeProductModal = () => {
        setSelectedCountry(null);
        setModalVisible(false);
    };

    return (
        <div className="fetch">
            <div className="search-categories-row">
                <input
                    type="search"
                    placeholder="Search for a country..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <Categories onRegionChange={handleRegionChange} />
            </div>
            <div className="countries">
                {filteredCountries.map((country) => (
                    <div
                        key={country.name.common}
                        className="country"
                        onClick={() => openProductModal(country)}
                    >
                        <img src={country.flags.png} alt={country.name.common} />
                        <div className='country-name'>
                            {country.name.common}
                        </div>
                        {/* {country.name.common} */}

                        <div className="population">
                            <span className="population-label">Population:</span>{" "}
                            <span className="population-value">{country.population.toLocaleString()}</span>
                        </div>

                        <div className='region'>
                            <span className="region-label">Region:</span>{" "}
                            <span className="region-value">{country.region}</span>
                        </div>
                        <div className='capital'>
                            <span className="capital-label">Capital:</span>{" "}
                            <span className="capital-value">{country.capital}</span>
                        </div>
                    </div>
                ))}
            </div>
            {modalVisible && <Modal closeModal={closeProductModal} country={selectedCountry} />}
        </div>
    );
};

export default Fetch;
