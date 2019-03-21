
# Testing task 1:
# Carry out static testing on the code below.
# Comment on any errors that you see below.


class CardGame

# Needs to be lower_snake_case
  def checkforAce(card)
# Sould be if card.value == 1
    if card.value = 1
      return true
    else
      return false
    end
  end
# Should be def highest_card(card1, card2)
  dif highest_card(card1 card2)
# Needs indented (
  if card1.value > card2.value
#  Should return card1
    return card
  else
    return card2
  end
end
# ) unnecessary end
end
# Needs indented (
def self.cards_total(cards)
# total not assigned a value, should be 0
  total
  for card in cards
    total += card.value
# Move return out of for loop, need to interpolate total into string
    return "You have a total of" + total
  end
end
# )
# Need to close out class with end
