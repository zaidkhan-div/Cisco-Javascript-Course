// Errors end exceptions

// It is really important to brace yourself for this simple truth:
// Errors will happen.

// You have certainly witnessed, multiple times, different applications malfunctioning, becoming unstable, returning unexpected results, or even shutting down uncontrollably. Unfortunately, we, the programmers, are responsible for most of these. Even if we didn't cause these problems directly, we probably didn't anticipate certain situations that could lead to a program malfunctioning (e.g. lack of a network connection).

// Qoute of the Day

// This fact is best expressed by the words of one of the founders of modern computer science, Edsger W. Dijkstra: "If debugging is the process of removing software bugs, then programming must be the process of putting them in".

// 02
// Natural languages and communication errors

// Imagine that you are organizing a party by the lake for your friends. As the organizer, you explain to everyone how to get there, but as always in such situations, someone gets lost. They’re almost there, but then they send a text message asking for additional tips. You send an answer, in which you tell them to turn right on the first path after leaving the forest, and then drive for another 500 meters. Since you are still on your way, you ask them to wait on the spot. The correct message could look like this:

// After leaving the forest, turn right into the first path, and drive 500m. Wait on the spot.

// This is an example of a syntax error (or more precisely, errors). In English, a declarative sentence should end with a period. Probably the person who receives this message will easily guess what it is about, but formally it will be incorrect and ambiguous. The interpreter (e.g. the JavaScript engine) or compiler cannot guess the meaning of what we have written. If such an error occurs, it will require us to correct it. Such errors are usually very easy to detect automatically, and always need to be corrected. They violate the language syntax rules. The program will not run if it contains a syntax error.

// After leaving the forest, turn right into the first pth, and drive 500m. Wait on the spot.

// Again, the recipient will probably guess what it is about, but the interpreter cannot afford to guess what the word “pth” may stand for, because it does not know the meaning of such a word. Such an error is also easy to detect, because the word “pth” is not in the vocabulary of our language. This is a semantic error. In compiled programming languages, this type of error will not allow the compiling and running of the program. In JavaScript, the interpreter will start the program and stop its execution after reaching such an instruction. This specific type of semantic error in JavaScript is called a reference error.

// Logical Errors

// The last category is logical errors. They are by far the hardest to find, because from a formal point of view, everything will look correct. We should tell our friend to turn right, but busy with something else we rush to write ... left.

// After leaving the forest, turn left into the first path, and drive 500m. Wait on the spot.

// Formally, everything looks correct: syntax, vocabulary, context. The information is consistent and unambiguous. And obviously incorrect. The error will not be detected until someone tries to follow this instruction and disappears somewhere in the wilderness.

// The last two errors may look quite similar at first glance, but they describe two completely different situations. A logical error makes it possible to execute the instruction, but it will give the wrong result. An instruction with a semantic error will make no sense, so most likely it will not be possible to execute it at all in this form.

