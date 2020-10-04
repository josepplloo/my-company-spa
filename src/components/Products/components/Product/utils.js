export const filterByCategory = ({ category = 'All', data = [] }) => {
  return data.filter(({ categories }) => {
    return categories.find(elementCategory => elementCategory === category)
  })
}

export const formatCategories = (url = '/') => {
  const URL_INDEX = {
    '/': 'All',
    '/tech': 'Tech',
    '/services': 'Services',
    '/office': 'Office'
  };
  const newURl = `/${url.split('/')[0]}`;
  return URL_INDEX[newURl];
};

export const getLength = (arr = []) => arr.length
