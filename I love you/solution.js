function howMuchILoveYou(nbPetals) {
    const results = [ "I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    return results[(nbPetals - 1) % results.length]
}