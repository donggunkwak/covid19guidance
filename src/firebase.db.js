import firebase from './firebase';
const db = firebase.firebaseDatabase;
const getRecommandedAction = async (viral, antibody, lang) => {
  const url = `/guidance/${lang}/${viral.toLowerCase()}_${antibody.toLowerCase()}`;
  const response = await db.ref(url).once('value');
  const data = response.toJSON();
  return data;
};
const getInterpretation = async (viral, antibody, lang) => {
  const url = `/interpretation/${lang}/${viral.toLowerCase()}_${antibody.toLowerCase()}`;
  const response = await db.ref(url).once('value');
  const data = response.toJSON();
  return data;
};
export default {
  getRecommandedAction,
  getInterpretation,
};