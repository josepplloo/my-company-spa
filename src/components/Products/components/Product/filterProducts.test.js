import { filterByCategory } from './utils';

const mockData = [
  {
    id: 'p-000',
    categories: ['Cat-1', 'All'],
  },
  {
    id: 'p-001',
    'categories': ['Cat-1', 'Cat-2', 'All'],
  },
  {
    id: 'p-002',
    categories: ['Cat-1', 'Cat-3', 'All'],
  },
  {
    id: 'p-003',
    categories: ['Cat-2', 'All'],
  },
  {
    id: 'p-004',
    categories: ['Cat-2', 'Cat-3', 'All'],
  },
  {
    id: 'p-005',
    categories: ['Cat-3', 'All'],
  },
  {
    id: 'p-006',
    categories: ['All'],
  }
]

test('Should return an empty array if data is not passed', () => {
  expect(filterByCategory({})).toHaveLength(0)
});

test('Should return an array with all the elements when no filter is given', () => {
  const filtered = filterByCategory({ data: mockData })
  const expectedLength = mockData.length;
  expect(filtered).toHaveLength(expectedLength)
});

test('Should return an array containing Cat-1 elements', () => {
  const filtered = filterByCategory({ category: 'Cat-1', data: mockData });
  const expectedLength = 3;
  expect(filtered).toHaveLength(expectedLength);
});

test('Should return an array containing Cat-2 elements', () => {
  const filtered = filterByCategory({ category: 'Cat-2', data: mockData });
  const expectedLength = 3;
  expect(filtered).toHaveLength(expectedLength);
});

test('Should return an array containing Cat-3 elements', () => {
  const filtered = filterByCategory({ category: 'Cat-3', data: mockData });
  const expectedLength = 3;
  expect(filtered).toHaveLength(expectedLength);
});