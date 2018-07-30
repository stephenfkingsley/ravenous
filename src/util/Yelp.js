import apiKey from './secret.js';

const Yelp = {
  search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.TER}&location=${this.LOCATION}&sort_by=${this.SORT_BY}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        console.log(response.json(), 'Test to see if fetch worked.');
      if (response.ok) {
        console.log('Test to see if fetch was ok.', response.json());
        return response.json();
      }
      //throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)).then(jsonResponse => { //issue is jsonResponse is undefined
      console.log('This is the jsonResponse', jsonResponse);
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => (
          {id: business.id,
            imageSRC: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories,
            rating: business.rating,
            reviewCount: business.review_count
          })
        );
      }
    });
  }
};

export default Yelp;
