import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer IDllDjDdkjZCk_mCH1FvyW3eP1CDoBYUi9L96odq_zr_4RSMNjWC5ggQbOHYD9sU64QtaLoWliNxzbqa7GC8mS_jjOD5DnLahzx0vyqR8SkCIMEJb6yIq3zH5IUZYHYx'
    }
});