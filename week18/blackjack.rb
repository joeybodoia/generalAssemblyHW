class Player
    attr_accessor :name, :bankroll, :hand
    def initialize (name, bankroll)
        @name = name
        @bankroll = bankroll
        @hand = []
    end
end


human = Player.new("Itachi", 100)

the_house = Player.new("House", 10000)



class Card
    attr_reader = :value
    @@deck = []
    def initialize (value)
        @value = value
        @@deck << {value: @value}
    end

    def self.deck
        @@deck
    end

    def populate_deck
        for i in 0...10 do
    end
end

# create 52 cards and push them to the deck
