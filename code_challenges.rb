# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]


def odd_least(arr)
    arr.select! { |el| el.is_a? Numeric }
    arr.select(&:odd?).sort
end
p odd_least(fullArr1)
p odd_least(fullArr2)


# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.

class Bike
    def initialize (model, wheels, framesize, bell, speedometer)
        @model = model
        @wheels = 2
        @framesize = framesize
        @bell = "silent"
        @speedometer = 0
    end
    def bell_change()
        if @bell == 'silent'
            @bell = 'Kring Ting!'
        else
            @bell = “silent”
        end
    end
    def get_info
        ["The #{@model}" "has #{@wheels} wheels" "and a #{@framesize} frame"]
    end
    def pedal_hard()
        if @speedometer == 0
            @speedometer = 10
        else
            @speedometer = @speedometer + 10
        end
    end
    def crazy_brake()
        if @speedometer <= 0
            @speedometer = 0
        else
            @speedometer = @speedometer - 10
        end
    end
end


cool_bike = Bike.new('Priority Classic Plus', '', 'medium', '', '')
p cool_bike.get_info

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.

cooler_bike = Bike.new('Bell Test', '', 'small', '', '')
cooler_bike.bell_change
p cooler_bike



# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.

coolest_bike = Bike.new('Speed Test', '', 'large', '', '')
p coolest_bike



# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

cool_bike.pedal_hard
cool_bike.pedal_hard
cool_bike.pedal_hard
p cool_bike
cool_bike.crazy_brake
p cool_bike
# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
