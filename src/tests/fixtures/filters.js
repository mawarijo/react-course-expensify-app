import moment from 'moment';


const defaultFilters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
  category: 'all'
};

const appliedFilters = {
  text: 'a',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days'),
  category: 'personal'
};

export { defaultFilters, appliedFilters };