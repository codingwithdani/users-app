/* global test, describe, expect */
const { render, screen, fireEvent, waitForElementToBeRemoved } = require('@testing-library/react')
const { Card } = require('../src/components/Card')
const { CreateUserForm } = require('../src/components/CreateUserForm')
const { DetailsCard } = require('../src/components/DetailsCard')
const { Filter } = require('../src/components/Filter')
const { Message } = require('../src/components/Message')
const { SideBar } = require('../src/components/SideBar')
const { UserCards } = require('../src/pages/UserCards')

describe('<Message />', () => {
  test('render message without problems', () => {
    render(<Message color='green' listOfMessages={['User created successfully']} />)
    screen.getByText('User created successfully')
  })
})
describe('<Card />', () => {
  test('render card without problems', () => {
    const src = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80'
    render(<Card avatar={src} name='Daniela' id='1' />)
    screen.getByText('Daniela')
  })
})
describe('<CreateUserForm />', () => {
  test('render create user form without problems', () => {
    render(<CreateUserForm />)
    screen.getByLabelText('Name')
    screen.getByLabelText('Job')
  })
})
describe('<DetailsCard />', () => {
  test('render details card without problems', () => {
    render(<DetailsCard />)
    screen.getByTestId('cardDetail')
  })
})
describe('<SideBar />', () => {
  test('render details side bar without problems', () => {
    render(<SideBar />)
    screen.getByTestId('sideBar')
  })
})

describe('<Filter />', () => {
  test('render filter without problems', () => {
    render(<Filter />)
    screen.getByPlaceholderText('Filter by name')
  })
})

describe('<UserCards /> page', () => {
  test('render list of users and could filter users and remove them', async () => {
    render(<UserCards />)
    // check that UserCards list users after api response
    await screen.findByText('George')
    // let's check we could filter by user name
    const inputNode = screen.getByPlaceholderText('Filter by name')
    fireEvent.change(inputNode, { target: { value: 'Janet' } })

    await screen.findByText('Janet')
    expect(screen.queryByText('George')).toBeNull()

    // let's check we could remove filter
    fireEvent.change(inputNode, { target: { value: '' } })
    await screen.findByText('George')

    // let's check we could remove a user
    const firstRemoveButton = screen.getAllByLabelText('Trash')[0].closest('button')
    firstRemoveButton.click()
    await waitForElementToBeRemoved(() => screen.queryByText('George'))
    await screen.findByText('Janet')
  })
})
