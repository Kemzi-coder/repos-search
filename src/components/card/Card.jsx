import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {getContributors, getCurrentRepo} from '../../actions/repos'
import './card.scss'

const Card = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isFetching = useSelector(state => state.repos.isFetching)
	const {username, reponame} = useParams()
	const [repo, setRepo] = useState({owner: {}})
	const [contributors, setContributors] = useState([])

	useEffect(() => {
		dispatch(getCurrentRepo(username, reponame, setRepo))
		dispatch(getContributors(username, reponame, setContributors))
	}, [])

	return (
		<div>
			{
				isFetching
					? <div className="fetching" />
					: <div>
						<button onClick={() => navigate("/home")} className="back-btn">BACK</button>
						<div className="card">
							<img src={repo.owner.avatar_url} alt="avatar" />
							<h2 className="name">{repo.name}</h2>
							<p className="stars">{repo.stargazers_count}</p>
						</div>
						<div className="contributors">
							{
								contributors.map((c, index) => <div className="contributor" key={index}>{index + 1}. {c.login}</div>)
							}
						</div>
					</div>
			}
		</div>
	)
}

export default Card
