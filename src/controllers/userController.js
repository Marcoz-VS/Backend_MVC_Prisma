import * as userRepository from '../repositories/userRepository.js'

export async function index(req, res) {
    const users = await userRepository.findAll();

    res.status(200).json({
        success: true,
        data: users,
        error: null
    });
}

export async function show(req, res) {
    const user = await userRepository.findById(Number(req.params.id));

    if (!user) {
        return res.status(404).json({ 
            success: false,
            data: null,
            error: "User not found"
        })
    }

    res.status(200).json({
        success: true,
        data: user,
        error: null
    });
}

export async function store(req, res) {
    const user = await userRepository.create(req.body);

    res.status(201).json({
        success: true,
        data: user,
        error: null
    });
}

export async function update(req, res) {
    const user = await userRepository.update(Number(req.params.id), req.body);

    res.status(200).json({
        success: true,
        data: user,
        error: null
    });
}

export async function destroy(req, res) {
    const user = await userRepository.remove(Number(req.params.id));

    res.status(204).send();
}