import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Index from '../pages/Index';
import { Loading } from '../components/Loading.js';

const composer = (props, onData) => {
  const user = Meteor.user();
  onData(null, { user });
};

export default composeWithTracker(composer, Loading)(Index);
