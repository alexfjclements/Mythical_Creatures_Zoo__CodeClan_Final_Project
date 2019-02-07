import React, { Component } from 'react';





const CreatureForm = (props) => {

  function handleSubmit(event){
    event.preventDefault()

    const creature = {
      "name":event.target.name.value,
      "gender":event.target.gender.value,
      "killBehaviour":event.target.killBehaviour.value,
      "originLocation":event.target.originLocation.value,
      "description":event.target.description.value,
      "breed":event.target.breed.value
    }
    props.handleCreaturePost(creature)
  }

    return (
    <div className="add-creature-form">
      <h2>Add New Creature</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" id="name" name="name" />

        <br></br>
        <br></br>
        <label>Gender</label>
        <div className="gender_input">
        <input type="radio" value="male" name="gender" /> Male <br />
        <input type="radio" value="female" name="gender" /> Female <br />
        <input type="radio" value="Non Binary" name="gender" /> Non Binary <br />
        </div>

       
        <label for="killBehaviour">Does it kill humans?</label>
        <select name="killBehaviour">
          <option value="IKillEat">Yes, it eats humans!</option>
          <option value="IDontKill">No way, Jose!</option>
        </select>

        
        <label>Origin Location</label>
        <input type="text" id="origin-location" name="originLocation" />

        
        <label>Description</label>
        <textarea name="description" for="add-creature-form">Add Description Here</textarea>

       
        <label>Breed</label>
        <input type="text" id="breed" name="breed" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
 }

export default CreatureForm;
