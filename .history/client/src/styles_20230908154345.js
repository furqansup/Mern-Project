/* App.js styles */
.appBar {
  border-radius: 15px;
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}

.heading {
  color: rgba(0, 183, 255, 1);
  font-size: 30px;
}

.image {
  margin-left: 15px;
  width: 40px;
}

/* Media query for small screens */
@media (max-width: 600px) {
  .mainContainer {
    flex-direction: column-reverse;
  }
}
