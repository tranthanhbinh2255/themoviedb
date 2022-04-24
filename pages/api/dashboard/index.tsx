import { people } from '../../../data'

export default async function handler(req, res) {
  res.status(200).json(people)
}
