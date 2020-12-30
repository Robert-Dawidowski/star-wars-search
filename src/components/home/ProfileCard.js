import React, { useEffect, useState } from 'react';
import { fetchHomePlanet, fetchFilm } from '../../actions/searchActions';
import { Modal, Button } from 'react-bootstrap';

const ProfileCard = ({ profile }) => {
    const [ planet, setPlanet ] = useState('');
    const [ show, setShow ] = useState(false);
    const [ filmsData, setFilmsData ] = useState([]);

    const handleClose = () => {
        setShow(false);
        setFilmsData([]);
    }
    const handleShow = () => setShow(true);

    const getProfileFilms = () => {
        profile.films.forEach((film) => {
            fetchFilm(film, setFilmsData).then(() => {
                handleShow();
            });
        });
    };

    useEffect(() => {
        fetchHomePlanet(profile, setPlanet);
    }, [profile]);

    return (
        <>
            <div className="col-12 col-md-4 mt-2">
                <div className="card" onClick={getProfileFilms}>
                    <div className="card-body">
                        <h5 className="card-title">{ profile.name }</h5>
                        <p className="card-text">Home Land: { planet.name }</p>
                        <p className="card-text">Planet Population: { planet.population }</p>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{ profile.name }</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    {filmsData.map((film, index) => {
                        return(
                            <div
                                key={`${profile.name}-film-${index}`}
                                className="modal-body__container"
                            >
                                <a
                                    href={`https://en.wikipedia.org/wiki/${film.title}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Film Title: {film.title}
                                </a>
                                <p>Release date: {film.release_date}</p>
                                <p>Description: {film.opening_crawl.substring(0, 130)}</p>
                            </div>
                        )
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProfileCard
