import React, { Component } from 'react';
import './Main.css';

const AddCreature = () => {

    return (
    <div className="add-creature-form">
      <h1>Add New Creature</h1>
      <form>
        <label>Name</label>
        <input type="text" id="name" name="name" />

        <label>Gender</label>
        <input type="radio" value="male" name="gender" /> Male <br />
        <input type="radio" value="female" name="gender" /> Female <br />
        <input type="radio" value="Non Binary" name="gender" /> Non Binary <br />

        <select name="Does it kill humans">
          <option value="IKillEat">Yes, it eats humans!</option>
          <option value="IDontKill">No way, Jose!</option>
        </select>

        <label>Origin Location</label>
        <input type="text" id="origin-location" name="originLocation" />

        <label>Description</label>
        <textarea name="description" form="add-creature-form">Add Description Here</textarea>

        <label>Breed</label>
        <input type="text" id="breed" name="breed" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
 }

export default AddCreature;
