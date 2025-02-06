function outerParent() {
    let one = 'I was vreated with let';
    var two = 'I was created with var';

    function innerChild() {
        console.log(one, "one");
        console.log(two, "two");
    };

    innerChild();
};

outerParent();