import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    
    const[term,setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
      
    const filterResultsByPrice = (price) => {
        ///price === '$' or '$$' or '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    }
    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            
            <ScrollView>
                <ResultsList 
                results={filterResultsByPrice('$')} 
                title="Cost Effective"
                
                />
                <ResultsList 
               results={filterResultsByPrice('$$')} 
                title="Bit pricier"
                
                />
                <ResultsList 
                results={filterResultsByPrice('$$$')} 
                title="Big spender"
                
                />
            </ScrollView>
        </>
    )
};

const style= StyleSheet.create({

});

export default SearchScreen;